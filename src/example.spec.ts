// describe('Example test', () => {
//   it('equals true', () => {
//     expect(true).toEqual(true);
//     expect('Users_2').toEqual('Users_2');
//   });
// });

function addNumbers(num1, num2) {
  return num1 + num2;
}

describe('addNumbers', () => {
  it('adds two number', () => {
    expect(addNumbers(2, 2)).toEqual(4);
  });
});
