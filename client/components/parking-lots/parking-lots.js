import {ParkingLots} from '/lib/collections'

Template.parkingLots.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('parkingLots.list');
  });
});

Template.parkingLots.helpers({
  'parkingLots': () => {
    return [
      {
        name: 31,
        isFree: true
      },
      {
        name: 32,
        isFree: true
      },
      {
        name: 36,
        isFree: false,
        userId: 12346,
        info: {
          username: "Alejandro Perez",
          license: "FYG 245"
        }
      },
      {
        name: 38,
        isFree: false,
        userId: 12347,
        info: {
          username: "Paola Trujillo",
          license: "ATR 337",
          isPremium: true
        }
      },
      {
        name: 33,
        isFree: true
      },
      {
        name: 34,
        isFree: false,
        userId: 12345,
        info: {
          username: "Guillermo Rodas",
          license: "HFL 666",
          isPremium: true
        }
      }
    ]
  }
})
