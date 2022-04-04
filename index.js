function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
      if (enteredCode !== correctCode) {
        return false;
      }
      if ((new Date(currentDate)) > (new Date(expirationDate))) {
        return false;
      }
      return true;
    }