
//字典序打印全排列
function order(){
	var list=['a','c','e','f'];
	list.sort();
	//console.log(list);
	function print(list,current){
		var temp;
		for(var i=current,length=list.length;i<length;i++){
			temp=list[current];
			//console.log(current);
			list[current]=list[i];
			list[i]=temp;
			//console.log(list);
			if(length===current+1){
				console.log(list);
			}else{
				var tem=list[i];
				//console.log(tem);
				//console.log(list[current]);
				for(var j=i;j>current;j--){
					list[j]=list[j-1];
				}
				if(i!==current)
					list[current+1]=tem;
				print(list,current+1);
				//console.log("q:"+list);
				tem=list[current+1];
				for(var j=current+1;j<i;j++){
					list[j]=list[j+1];
				}
				if(i!=current)
					list[i]=tem;
				//console.log(list);
			}
			temp=list[current];
			//console.log(current);
			list[current]=list[i];
			list[i]=temp;
		}
		print(list,0);
	}

}

function bubblesort(){
	var list=[1,4,5,68,9,7,3];
	function sort(list){
		for(var i=list.length;i>0;i--){
			for(var j=0;j<i;j++){
				if(list[j]>list[j+1]){
					var tmp=list[j];
					list[j]=list[j+1];
					list[j+1]=tmp;
				}
			}
		}
	}
	sort(list);
	console.log(list);
}

//bubblesort();

function heapsort(){
	var list=[3,451,5,6,9,3,23,53,35];
	function build(list){
		for(var i=Math.ceil((list.length-1)/2);i>=0;i--){
			down(list,i,list.length-1);
		}
	}
	function down(list,i,lastPos){
		var minChildPos=i*2+1;
		if(minChildPos>lastPos){
			return ;
		}
		var minChildValue=list[minChildPos];
		if(minChildPos!=lastPos&&list[minChildPos]>list[minChildPos+1]){
			minChildValue=list[minChildPos+1];
			minChildPos++;
		}
		if(list[i]>minChildValue){
			var temp=list[i];
			list[i]=minChildValue;
			list[minChildPos]=temp;
			down(list,minChildPos,lastPos);
		}
	}
	function sort(list){
		for (var i = list.length-1; i >=0; i--) {
			var tmp=list[0];
			list[0]=list[i];
			list[i]=tmp;
			//console.log(list);
			down(list,0,i-1);
		}
	}
	build(list);
	sort(list);
	console.log(list);
}
// heapsort();

function swap(list,i,j){
	list[i]=[list[j],list[j]=list[i]][0];
}
function insertsort(){
	var list=[3,451,5,6,9,3,23,53,35];
	function sort(list){
		for(var i=1;i<list.length;i++){
			var currentValue=list[i];
			for(var j=i-1;j>0;j--){
				if(currentValue<list[j]){
					list[j+1]=list[j];
				}
				else{
					break;
				}
			}
			list[j+1]=currentValue;

		}
	}
	sort(list);
	console.log(list);

}
//insertsort();

function mergesort(){
	var list=[3,451,5,6,9,3,23,53,35];
	//var list=[3,451];
	function sort(list,start,end){
		//console.log('start:'+start+";end:"+end);
		if(end-start>0){
			var middle=Math.floor((start+end)/2);
		//	console.log('middle:'+middle);
		sort(list,start,middle);
		sort(list,middle+1,end);
		merge(list,start,middle,end);
	}
}
function merge(list,start,middle,end){
	var left=start;
	var right=middle+1;
	var temp=[];
	while(left<=middle&&right<=end){
		if(list[left]<list[right]){
			temp.push(list[left++]);
		}else{
			temp.push(list[right++]);
		}
	}

	for(var i=left;i<=middle;i++){
		temp.push(list[i]);
	}

	for(var i=right;i<=end;i++){
		temp.push(list[i]);
	}

	for(var i=start,j=0;i<=end;i++,j++){
		list[i]=temp[j];
	}
}
sort(list,0,list.length-1);
console.log(list);

}
//mergesort();


function binarysort(){
	var list=[3,451,5,6,9,3,23,53,35];
	function Node(value,left,right){
		if(this instanceof Node){
			this.value=value;
			this.left=left;
			this.right=right;
		}else{
			return new node();
		}
	}

	function Tree(node){
		this.root=node;
	}
	Tree.prototype.insert=function(node){
		if(!(node instanceof Node)){
			node=new Node(node);
		}
		var current=this.root;
		var pre=this.root;
		while(current){
			pre=current;
			if(current.value>node.value){
				current=current.left;
			}else{
				current=current.right;
			}
		}
		if(pre.value>node.value){
			pre.left=node;
		}else{
			pre.right=node;
		}
	}
	Tree.prototype._print=function(node){
		if(node){
			this._print(node.left);
			console.log(node.value);
			this._print(node.right);
		}
	}
	Tree.prototype.print=function(){
		this._print(this.root);
	}
	var node=new Node(list[0]);
	var tree=new Tree(node);
	for(var i=1;i<list.length;i++){
		tree.insert(list[i]);
	}
	tree.print();
}
//binarysort();

function quicksort(){
	var list=[3,451,5,6,9,3,23,53,35];
	function sort(list,start,end){
		if(end-start<0){
			return ;
		}
		var lt=start;
		for(var i=start+1;i<=end;i++){
			if(list[i]<list[start]){
				swap(list,++lt,i);
			}
		}
		swap(list,lt,start);
		sort(list,start,lt-1);
		sort(list,lt+1,end);
	}
	sort(list,0,list.length-1);
	console.log(list);
}

quicksort();
