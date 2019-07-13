var myName="Varma";
            var age=46;
            var isStudent=false;

            console.log("Welcome to " + myName)

            age="Fourty six"
            
            var x;

            var myNumbers=["one","twio","three"];

            var student={
                name:"Varma",
                age:46,
                isStudent:false,
                "college name":"JNTU",
                1:"one"
            }

            /*
                //primitve types
                number
                string
                boolean
                
                //special types
                undefined
                null

                //speacial data structures / object types
                array []
                object {}
            */

            // if -- else

            var color="red";

            if(color=="red"){
                console.log("red")
            }
            else if(color=="black"){
                console.log("black")
            }
            else if(color=="green"){
                console.log("green")
            }
            else
            {
                console.log("unknown")
            }

            var a=2;

            if(a){

            }
            else
            {

            }

            //ternary operator
            (color=="red") ? console.log("red") : console.log("unknown")

            switch(color){
                case "red":
                    console.log("red");
                    break;
                case "black":
                    console.log("red");
                    break;
                default:
                    console.log("unknown")
            }

            //Loops

            var a=0;

            while(a<=10){
                console.log(a);
                a++;
            }

            var b=0
            do {
                console.log(b);
                b++;
            }
            while(b<=10)

            for(var c=0;c<=10;c++){
                console.log(c)
            }