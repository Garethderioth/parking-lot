Template.parkingLot.helpers({
  isMe() {
    if (this.userId === 12345) {
      return true;
    }
  },
  isFreeOrImPremium() {
    const isFree = this.isFree;
    const iAmPremium = true;
    return  isFree || iAmPremium ? true : false;
  }
})
