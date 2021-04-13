//EX 3: COUNT UPPER CASES
function countUpperLetters(str){
    if(!str) return 0;  //If string is null, return 0
    var count = 1;      
    for(let i = 0; i < str.length; i++) 
    {
        char = str[i];  //Assign str[i] to a variable
        if(char===char.toUpperCase()) count++;  //Check if this character is Upper
    }
    return count;
}


//EX 1.1: CONVERT INT/STRING TO CURRENCY
function toMoney(str){
    if(!str) return 0;  //Return 0 if string's null
    str = str.toString();   //Convert to String
    if(!hasDot(str))    //Check if it is decimal
    {
        money = str;
        count = 1;
        for(let i = str.length - 1; i >= 0; i--)
        {
            if(count === 3) //Insert "," after 3 numbers from the back
            {
                money = [money.slice(0,i), ",", money.slice(i)].join('');
                count = 1;
            }
            else count++;
        }
    }
    else{   //Process decimals
        for(let i = str.length - 1; i>=0; i--)
        {
            if(str[i] === ".")
            {
                //Split to integer and tithes
                nguyen = str.slice(0,i); //Integer
                thapphan = str.slice(i);  //Tithes
                money = nguyen; //If integer, use the above code
                count = 1;
                for(let i = nguyen.length - 1;i >= 0;i--)
                {
                    if(count === 3)
                    {
                        money = [money.slice(0,i),",",money.slice(i)].join('');
                        count = 1;
                    }
                    else count++;
                }
                break;
            }
        }
        money = [money,thapphan].join(''); //Join them back
    }
    console.log(money);
}

function hasDot(str){
    return str.includes(".");
}

//EX 1.2: SHORTEN MONEY
function shortenZeroes(numb)
{
    char=["","K","M","B","T"];
    index = 0;
    //Remove 3 mumbers from the back
    while(numb > 1000)  
    {
        numb /= 1000;
        index++; //With each 3 deleted numbers, change to K, M, B, ...
    }
    numb = numb.toString(); //Convert to string
    money = [numb.slice(0,5),char[index]].join('')
    console.log(money);
}


//EX 1.4: GET EXTENSION
function getExtension(str)
{
    return str.split('.').pop()
}

//EX 2.1: CALCULATE FACTORIAL
factorial = 1;
function getFactorial(numb)
{
    if(numb == 1 || numb == 0) return factorial;
    else 
    {
        factorial *= numb;
        return getFactorial(numb-1);
    }
}

//EX 2.2: GET RANDOM BETWEEN RANGE
function getRandomNumber(min,max)
{
    inirandom = Math.random();
    random = inirandom * (max-min);
    random = Math.floor(random);
    random = random + min;
    return random;
}

function getRandomElement(array)
{
    inirandom = Math.random();
    random = inirandom * (array.length-1);
    random = Math.floor(random);
    return array[random];
}

//EX 2.3: FIND MISSING ELEMENT
function findMissing(arr,brr)
{
    crr = arr;
    for(let i = 0; i < brr.length; i++)
    {
        index = crr.indexOf(brr[i]);    //Duyet tung phan tu cua mang. Tim index nhung phan tu ma brr[] giong voi arr[]
        if (index > -1) {
            crr.splice(index, 1);
          }
    }
    return crr;
}

//MINE SWEEPER. Em lam cho vui
function generateBomb(size,bomb)
{
    //Generate an all zeroes matrix 
    brr =  new Array(size);
    for(let i = 0; i < size; i++) brr[i] = new Array(size).fill(0); 
    
    //Generate bombs
    for(let i = 0; i < bomb; i ++)
    {
        random_row = Math.random() * size;
        random_column = Math.random() * size;
        random_row = Math.floor(random_row);
        random_column = Math.floor(random_column);
        if(brr[random_row][random_column] !== -1) brr[random_row][random_column] = -1;
        else i--;
    }

    //Generate hints
    for(let i = 0; i < size; i++)
    {
        for (let j = 0; j < size; j++)
        {
            if(brr[i][j]!== -1)
                brr[i][j] = getSurrounding(brr,i,j,size);
            
        }
    }
    return brr;
}

function getSurrounding(brr,r,c,size)
{
    count = 0;
    for(let a = r-1 ; a <= r+1; a++)
    {
        if(a>=0 && a<size)
        {
            for(let b = c-1; b<=c+1; b++)
            {
                if(b>=0 && b<size)
                {
                    if(brr[a][b]===-1) count++;
                }       
            }
        }        
    }
    return count;
}


//EX 3: FIND WAY BACK TO MY HOME
function isValidCell(brr,r,c,row,column)
{
    if(r >= 0 && c >=0 && r < row && c < column) return true;
    else return false;
}

function getValidMove(brr,r,c,row)
{
    for(let a = r-1 ; a <= r+1; a++)
    {
        
        if(a >=0 && a < row && brr[a][c] === 0)
            return a;
    }        
}

function move(brr,r,c,row,column)
{
    if(c<5)
    {
        c++;
        next = getValidMove(brr,r,c,row);
        console.log("next: " + next);
        move(brr,next,c,row,column);
    }
    else console.log('I am home');
}

matrix = [[0,1,1],[0,1,1],[0,1,1],[0,1,1],[0,0,1]];
matrix2 = [[0,1,1],[1,0,1],[1,1,0],[1,0,1],[1,1,1]];

function goHome()
{
    move(matrix,0,0,3,5);
}