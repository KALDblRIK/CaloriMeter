export class Profile extends Realm.Object<Profile> {
  _id!: number
  name!: string
  maxCaloriesPerDay?: number
  static schema = {
    name: 'Profile',
    properties: {
      _id: 'int',
      name: 'string',
      maxCaloriesPerDay: 'int',
    },
    primaryKey: '_id',
  }
}