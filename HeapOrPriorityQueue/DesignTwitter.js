//first start with follow and unfollow methods.
//we need to map one user id with its followers. SO a good approach 
//is to use a HashMap. Where user id can be a key and a list of followers id can 
//be a value.
//We need to remove a follower when someone unfollow a user. If we use a list of follower's id
//then we need to iterate the list to find and delete a follower O(n).
//To make it simple O(1) instead of list we can use a hashset.
//so we can create a Hashmap with key as user id and value would be a hashset instead of a list.

//For postTweet method we can have a Hashmap which has userid as a key and List of tweetid
//as value. Since everytime we need to add a new tweet at the end of the tweetlist we will do it in O(1).

// the getFeed method needs to pull most resent tweets by the followees. To keep the note
//of recent tweets and at what time they were posted, we can modify the hashmap TweetMap
// in postTweet. Instead of a List of tweet ids, we can use a key value pair of the tweet id and
//a count denoting an order in which the tweet was posted.
//for ex: user1 posted T1, the user 2 posted T2 and then user 1 again posted T3
// this is how the HashMap will look
//[User1: [1,T1] [3,T3]],
//[User2: [2,T2]]
// so when we need to pick the most recent tweet we can use the 
//the count from the list.


class Twitter {
    
    constructor() {
        this.count =0;
        this.tweetMap = new Map();
        this.followMap = new Map();
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {

        if(!this.tweetMap.has(userId))
            this.tweetMap.set(userId,[]);
        this.tweetMap.get(userId).push([this.count, tweetId]);
        this.count++;

    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const res =[];

        if(!this.followMap.has(userId)){
            this.followMap.set(userId, new Set());
        }

        this.followMap.get(userId).add(userId); // coz we also need to show your tweets too
        const maxHeap = new PriorityQueue((a,b) => b[0] - a[0]); 

//code to push the latest tweet tweeted by every user the current user follows
// basically we will add every last index tweet from all followers. These may necessarily not be the latest tweet.
// but later when we pop from maxHeap it will give us one latest tweet.
        for(const followeeId of this.followMap.get(userId)){
            if(this.tweetMap.has(followeeId)){
                const tweets = this.tweetMap.get(followeeId);
                const index = tweets.length - 1; // apointer to know what will be the index of the next old tweet for the follower/
                const [count, tweetId] = tweets[index];// the newest tweet will always be the last index of the list. for a user it could be any number let say 5.
                maxHeap.enqueue([count, tweetId,followeeId, index-1]);// to fetch the next old tweet we need to look at index 4 in his list.
            }
        }

        while(!maxHeap.isEmpty() && res.length < 10){
            //this gives us one latest tweet among all the followers.
            const [count, tweetId, followeeId, nextIndex] = maxHeap.dequeue();
            res.push(tweetId);
            // since we poped the latest tweet from one follower, we need to add the next older tweet from that same follower
            // because it could be the next latest tweet.

            if(nextIndex >=0){
                const [olderCount, olderTweetId]= this.tweetMap.get(followeeId)[nextIndex];

                maxHeap.enqueue([olderCount, olderTweetId, followeeId, nextIndex -1]);
            }
        }

        return res;

    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if(!this.followMap.has(followerId)){
            this.followMap.set(followerId,new Set());
        }

        this.followMap.get(followerId).add(followeeId);

    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if(this.followMap.has(followerId)){
            this.followMap.get(followerId).delete(followeeId);
        }
    }
}
//Extra Notes on Javascript maxHeap queue comparator syntax
/*
Short version: with the comparator you tell the queue how to rank items (e.g., by the first field of a tuple). Without it, the queue uses its default priority rule (often “bigger number = higher priority”), which may not work for arrays/objects.

What these two do
// 1) Custom ordering: rank by the 0th element (larger first)
const maxHeap = new MaxPriorityQueue((a, b) => b[0] - a[0]);


Use this when your elements are tuples/objects (e.g., [timestamp, tweetId]) and you want the queue ordered by a specific field.

Example: enqueue [7,'A'], [3,'B'], [10,'C'] → dequeue gives [10,'C'] first.

// 2) Default ordering
const maxHeap = new MaxPriorityQueue();


Uses the library’s default comparison/priority:

Often works if you enqueue plain numbers (largest number dequeues first).

May not work for arrays/objects unless the implementation supports a default priority accessor or you pass (element, priority) separately (depends on the library).
*/