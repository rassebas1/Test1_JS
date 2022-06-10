function breakingfuction() {
  throw new Error('This is a breaking error');
}
 function asyncBreakingfuction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('This is a breaking async error'));
    }, 1000);
  });
}

try {
    asyncBreakingfuction();
    //breakingfuction();
} catch (error) {
  console.log((error = new Error("Error 1")));
}

