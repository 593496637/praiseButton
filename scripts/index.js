class PraiseButton{
    constructor(num,element){
        this.num=num;
        this.element=element;
    }
    clickAction(){
        this.element.click(()=>{
            if(this.num<10){
                this.element.css('filter','grayscale(0)');
                $('#zan').addClass('zanActive');
                this.num=add(this.num);
                setTimeout(function(){
                    $('#zan').removeClass('zanActive');
                },1000);
            }else{
                this.element.css('-webkit-filter','grayscale(100%)');
                this.num=0;
            }
            console.log(this.num);
        })
    }
}

class Thumb extends PraiseButton{
    constructor(num,element){
        super(num,element);
    }
}

export default {Thumb}

// let f =new Thumb(0,$("handBox"));
// f.clickAction();
