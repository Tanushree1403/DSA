public class Node {
    public int key { get; set; }
    public int val { get; set; }
    public Node prev { get; set; }
    public Node next { get; set; }

    public Node(int Key, int Val) {
        key = Key;
        val = Val;
        prev = null;
        next = null;
    }
}

public class LRUCache {
    //Keep most recently used at the right 
    //and least recently used at the left. 

    private int cap;
    private Dictionary<int, Node> cache;
    private Node left;
    private Node right;

    public LRUCache(int capacity) {
        cap = capacity;
        cache = new Dictionary<int, Node>();
        left = new Node(0, 0);
        right = new Node(0, 0);
        left.next = right;
        right.prev = left;
    }

    public void Remove(Node node){
       var prev = node.prev;
       var next = node.next;
       prev.next = next;
       next.prev = prev; 
       // assign both next and previous since this is doubly LL
    }

    public void Insert(Node node){
        var prev = right.prev;
        prev.next = node;
        node.next = right;
        node.prev = prev;
        this.right.prev = node;
        //since the node is saved between the right 
        //and left node we need to join the new node to both right and left node
        //0<>1<>2<>0  where 2 is the new node. SO we need to join node 2 
        //with node 1 aka prev and node 0 aka right.
    }
    
    public int Get(int key) {
        if(cache.ContainsKey(key)){
             Node node = cache[key];
             Remove(node);
             Insert (node);
             return node.val;
        }
        else return -1;
        
    }
    
    public void Put(int key, int value) {
        if(cache.ContainsKey(key)) Remove(this.cache[key]);
        Node newNode = new Node(key, value);
        cache[key] = newNode;
        Insert(newNode);

        if(cache.Count > cap){
            var lru = left.next;
            Remove(lru);
            cache.Remove(lru.key);

        }
        

    }
}
