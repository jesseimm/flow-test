/* @flow */
function jee(x: number): number {
    console.log(x);
}

/* flow error
jee('1');
*/

//valid
jee(1);

