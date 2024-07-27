// input = saveChangesInTheEditor
// output = 5

function camelCase(string) {
    let count = 1;
    for (let i =0; i< string.length; i++) {
        if(string[i]>='A' && string[i]<='Z'){
            count++;
        }
    }
    return count;
}
console.log(camelCase('tusharKumarPatel'));
console.log(camelCase('tusharKumarPaADFVCGStel'));
