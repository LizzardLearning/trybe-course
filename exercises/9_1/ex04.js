const filterPeople = (people) => {
  return people.filter(({bornIn, nationality}) => {
    return (bornIn > 1900 && bornIn < 2000) && nationality === 'Australian';
  });
};

module.exports = filterPeople;    
