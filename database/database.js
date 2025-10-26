import { openDatabaseAsync } from 'expo-sqlite';

let db;

export async function initDB() {
  if (!db) {
    db = await openDatabaseAsync('locadora.db');

    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS filmes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        genero TEXT,
        ano INTEGER,
        disponivel INTEGER DEFAULT 1
      );
    `);

    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS clientes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL
      );
    `);

    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS locacoes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        cliente_id INTEGER NOT NULL,
        filme_id INTEGER NOT NULL,
        data_locacao TEXT NOT NULL,
        data_devolucao TEXT,
        FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE CASCADE,
        FOREIGN KEY (filme_id) REFERENCES filmes(id) ON DELETE RESTRICT
      );
    `);

    console.log('✅ Banco inicializado');
  }

  return db;
}
