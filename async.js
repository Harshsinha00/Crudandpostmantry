console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
  const promiseWifeBringingTickets = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => {
    resolve('popcorn');
  });

  const addButter = new Promise((resolve, reject) => {
    resolve('butter');
  });

  let ticket = await promiseWifeBringingTickets;
  console.log(`wife: have the ${ticket}`);
  console.log('husband: we should go in');
  console.log('wife: no, I am hungry');

  let popcorn = await getPopcorn;
  console.log(`husband: I got some ${popcorn}`);
  console.log('husband: we should go in');
  console.log('wife: I need butter on my popcorn');

  let butter = await addButter;
  console.log(`husband: I got some ${butter}`);
  console.log('husband: we should go in');
  console.log('wife: I need butter on my popcorn');

  const getColdDrinks = new Promise((resolve, reject) => {
    setTimeout(() => resolve('cold drinks'), 2000);
  });

  let coldDrinks = await getColdDrinks;
  console.log(`husband: I got some ${coldDrinks}`);
  console.log('husband: we should go in');
  console.log('wife: okay, let\'s go in');

  return 'Movie time!';
};

preMovie()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log('Error:', error);
  });
