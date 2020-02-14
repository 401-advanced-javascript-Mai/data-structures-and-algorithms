/* eslint-disable no-undef */
'use strict';
//// the test here is  done with my freind muna 
const isBlanced = require('./multi-bracket-validation.js');

describe(' MultiBracketValidati ()' , () =>
{
  it('{} return true' , () =>
  {
    let input = '{}';

    expect(isBlanced(input)).toBeTruthy();
  });

  it('{}(){} return true' , () =>
  {
    let input = '{}(){}';

    expect(isBlanced(input)).toBeTruthy();
  });

  it('()[[Extra Characters]] return true' , () =>
  {
    let input = '()[[Extra Characters]]';

    expect(isBlanced(input)).toBeTruthy();
  });

  it('(){}[[]] return true' , () =>
  {
    let input = '(){}[[]]';

    expect(isBlanced(input)).toBeTruthy();
  });

  it('{}{Code}[Fellows](()) return true' , () =>
  {
    let input = '{}{Code}[Fellows](())';

    expect(isBlanced(input)).toBeTruthy();
  });

  it('[({}] return false' , () =>
  {
    let input = '[({}]';

    expect(isBlanced(input)).toBeFalsy();
  });

  it('(](	 return false' , () =>
  {
    let input = '(](';

    expect(isBlanced(input)).toBeFalsy();
  });

  //   it('{(}) return true' , () =>
  //   {
  //     let input = '{(})';

//     expect(isBlanced(input)).toBeTruthy();
//   });
});