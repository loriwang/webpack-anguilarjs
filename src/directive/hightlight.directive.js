function hightlightDirective (){
    let directive ={
        restrict:'AE',
        link:function(scope,element,attrs){
            setTimeout(() => {
                $(element).css('background','red')
            })
        }
    }
    return directive
}
export default hightlightDirective