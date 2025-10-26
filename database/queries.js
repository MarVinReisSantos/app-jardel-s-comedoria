import db from './database';

// 🔹 Adicionar um novo filme (REFATORADO PARA PROMISE)
export function addFilme(titulo, genero, ano) {
  return new Promise((resolve, reject) => { // <-- Retorna uma Promise
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO filmes (titulo, genero, ano) VALUES (?, ?, ?);',
        [titulo, genero, ano],
        // Sucesso: resolve a Promise
        (_, result) => {
          resolve(result);
        },
        // Erro: rejeita a Promise (será pego pelo 'catch' no AddMovieScreen)
        (_, error) => {
          console.error('Erro ao inserir filme:', error);
          reject(error); 
          return true; // Retorna true para reverter a transação em caso de erro SQL
        }
      );
    });
  });
}

// 🔹 Adicionar um novo filme
// export function addFilme(titulo, genero, ano, callback) {
//   db.transaction(tx => {
//     tx.executeSql(
//       'INSERT INTO filmes (titulo, genero, ano) VALUES (?, ?, ?);',
//       [titulo, genero, ano],
//       (_, result) => callback && callback(result),
//       (_, error) => console.error('Erro ao inserir filme:', error)
//     );
//   });
// }

// 🔹 Listar todos os filmes
export function getFilmes(callback) {
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM filmes;', [], (_, { rows }) => {
      callback(rows._array);
    });
  });
}

// 🔹 Registrar cliente
export function addCliente(nome, email, callback) {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO clientes (nome, email) VALUES (?, ?);',
      [nome, email],
      (_, result) => callback && callback(result),
      (_, error) => console.error('Erro ao inserir cliente:', error)
    );
  });
}

// 🔹 Registrar locação (usa transação com atualização de disponibilidade)
export function registrarLocacao(clienteId, filmeId, dataLocacao, callback) {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO locacoes (cliente_id, filme_id, data_locacao) VALUES (?, ?, ?);',
      [clienteId, filmeId, dataLocacao]
    );
    tx.executeSql('UPDATE filmes SET disponivel = 0 WHERE id = ?;', [filmeId]);
  },
  (error) => console.error('Erro na locação:', error),
  () => {
    console.log('✅ Locação registrada com sucesso');
    callback && callback();
  });
}

// 🔹 Registrar devolução
export function registrarDevolucao(locacaoId, dataDevolucao, callback) {
  db.transaction(tx => {
    tx.executeSql('SELECT filme_id FROM locacoes WHERE id = ?;', [locacaoId],
      (_, { rows }) => {
        const filmeId = rows.item(0).filme_id;
        tx.executeSql(
          'UPDATE locacoes SET data_devolucao = ? WHERE id = ?;',
          [dataDevolucao, locacaoId]
        );
        tx.executeSql('UPDATE filmes SET disponivel = 1 WHERE id = ?;', [filmeId]);
      }
    );
  },
  (error) => console.error('Erro na devolução:', error),
  () => {
    console.log('✅ Devolução registrada');
    callback && callback();
  });
}

// 🔹 Listar histórico de locações de um cliente
export function getHistoricoCliente(clienteId, callback) {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT l.id, f.titulo, l.data_locacao, l.data_devolucao
       FROM locacoes l
       JOIN filmes f ON f.id = l.filme_id
       WHERE l.cliente_id = ?;`,
      [clienteId],
      (_, { rows }) => callback(rows._array)
    );
  });
}
