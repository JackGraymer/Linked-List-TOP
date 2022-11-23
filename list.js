#!/usr/bin/node

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    append(value){
        const node = new Node(value)
        if(this.size == 0){
            this.head = node
        }else{
            let prev = this.head
            while(prev.nextNode !== null){
                prev = prev.nextNode
            }
            prev.nextNode = node
        }
        this.size ++
    }

    prepend(value){
        const node = new Node(value)
        if(this.size == 0){
            this.head = node
        }else{
            node.nextNode = this.head
            this.head = node
        }
        this.size ++
    }

    getSize(){
        console.log('List Size is: ' + this.size) 
    }

    getHead(){
        console.log('Head is: ', this.head)
    }

    getTail(){
        let tail = this.head
        if(this.size > 0){
            while(tail.nextNode !== null){
                tail = tail.nextNode
            }
            console.log('Tail is: ' , tail)
            return tail
        }
    }

    atIndex(index){
        if (index < 0 || index > this.size){
            console.log('Index non existent')
        }else{
            let current = this.head
            for(let position = 0; position< index; position ++){
                //console.log(current , position)
                current = current.nextNode                
            }
            console.log('Node at Index ' + index ,current)
            return current
            
        }
    }

    pop(){
        if(this.size == 0){
            return
        }else if(this.size == 1){
            this.head = null
            this.size --
            return
        }else{
            let current = this.atIndex(this.size-2)
            current.nextNode = null
            console.log('pop')
            this.size --
            return
        }
        
    }

    contains(value){
        if(this.size > 0){
            let current = this.head
            while(current !== null){
                if(current.value == value){
                    console.log(true , value)
                    return true
                }else{
                    current = current.nextNode
                }
            }
            //while(current.value !== value)
            return
        }
    }

    find(value){
        if(this.contains(value)){
            console.log('index??')
            console.log(this.toString().indexOf(value))
            return this.toString().indexOf(value)
        }
        return

    }

    toString(){
        if(this.size === 0){
            console.log('List is emty')
        }else{
            let current = this.head
            let listValues = []
            while (current !== null){
                listValues.push(current.value) 
                current = current.nextNode
            }
            console.log(listValues)
            return listValues
        }
    }

    insertAt(value, index){
        if(this.size == 0){
            this.prepend(value)
        }
        let node = new Node(value)
        let prev = this.atIndex(index-1)
        node.nextNode = prev.nextNode
        prev.nextNode = node
        console.log('prev', prev)
        this.size++
    }

    removeAt(index){
        if(this.size > 0){
            if(index === 0){
                this.head = this.head.nextNode
                this.size--
                return
            }
            let prev = this.atIndex(index-1)
            let current = this.atIndex(index)
            prev.nextNode = current.nextNode
            this.size--
        }
        
    }

}


class Node{
    constructor(value = null, nextNode = null){
        this.value = value,
        this.nextNode = nextNode
    }
}

let list = new LinkedList
list.prepend(15)
list.prepend(25)
list.prepend(80)
list.append(100)

list.toString()
list.getSize()
list.getHead()
list.getTail()
list.atIndex(2)
list.insertAt(44, 2)
list.toString()
list.pop()
list.toString()
list.insertAt(99,1)
list.toString()
list.contains(44)
list.contains(80)
list.find(15)
list.removeAt(0)
list.toString()
list.getSize()
list.pop()
list.pop()
list.toString()