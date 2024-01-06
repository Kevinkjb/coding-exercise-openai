
## Available Scripts

In the project directory, you can run:

### `npm start`


# Quick Summary

Project is made on HTML, CSS, Javascript, React and Bootstrap. I made a simple app I fetch the data that was provided
and there's is some challenges that I encounter and learn. And I believe if I have more time I can try out things and implement it on the code. 
There's some parts also that I know that can skill improve and It's a good learning exprience for me.

Unfortunately I don't know much of Typescript yet, that why I wasn't able to implement it in my code. But it's something that I'm learning already.

# Components Files
- Community.js -> It's a file where I use props to fetch the data from `CommunityPage File`.
- CommunityHomes.js => It's a file where I fetch the data for the community home prices.
- Header.js => I just add a simple Nav where I can navigate pages by using {Link}

# Pages 
-CommunityPage => Is the main file where I fetch data for community and name, images, and group.
-Home => This is the file that I used to fetch the data for Home Community where I grab prices and average it.

## Note:

    --I created a variable where it stores the data and then  I used the filter method to check if the CommunityId matched.
    --Then I created an empty array where I can store the filteredSix data.
    --I map the filteredSix to get all the prices of the certain communities then pushed it into the empty array to saved it there.
    --Then I created a variable where it stores the result then I grabbed the array where I stored the data then used reduce method to sum up everything to get the average,

    const filteredIdSix = dataTwo.filter(item => item.communityId === "7fccecd9-d246-4681-84e9-a92861999c20");
    const arraySix = [];
    filteredIdSix.map(item => {
        return arraySix.push(item.price)
    })
    let resultSix = arraySix.reduce((accumulator, currentValue) =>{
        return Math.round(accumulator + currentValue)
    }, 0)
###

## Follow Up Question:

If given more time, how would you improve the quality of your application? Would you implement anything differently?

Yes, definitely. In my honest opinion I believe that I can do better and improve the quality of the application even more. I would probably try implement Typescript for better code structure and less buggy. And Other frameworks as well.

## Evaluation Considerations

###	Is the information displayed in a way that is easy to understand?
    - Yes, It'easy to understand.

###	Does the design consider what jobs the user needs to perform?
    -Yes, when designing products, services, or systems, considering the tasks and jobs that users need to perform is a crucial aspect of the design process.

### Does the design look professional and polished?
    - I would say it's not the best, but can be improve more

###	Does your application meet all the requirements?
    -Unfortunately I wasn't able to implement Typescript and I struggle on the logic side,
    specially running two API's which a learning experience for me.

###	Is the application designed to be mobile-friendly or mobile-first?
    - Yes

###	How are network errors handled?
    - I believe so

###	Does your application handle invalid data?
    - No, but it was something I would do if given an opportunity.

###	Is your code/components/folders structured in a thoughtful way
    - Yes

