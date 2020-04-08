import Dexie from 'dexie'

const testIndexedDb = async() => {
  try {
    const LocalDB = new Dexie('Pitchy.test')
    LocalDB.version(1).stores({
      videos: '++id, url',
    })
    await LocalDB.videos.add({
      url: 'url',
    })
    await LocalDB.videos.where('url').equals('url').toArray()
    await LocalDB.videos.where('url').equals('url').delete()
    LocalDB.delete()

    return true
  } catch(e) {
    return false
  }
}

export default async function() {
  await ((ms) => new Promise(r => setTimeout(r, ms)))(Math.random() * 1000 + 2000)

  return {
    indexedDb: await testIndexedDb(), // boolean
  }
}
