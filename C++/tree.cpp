#include<iostream>

using namespace std;
enum color
{
	red, balck
};

struct node{
	node* left=NULL;
	node* parent=NULL;
	node* right=NULL;
	color c;
	int value;
	node(int v,color c1=red){
		value = v;
		c = c1;
	}
	void setrightChild(node *child){
		right = child;
		child->parent = this;
	}
	void setleftChild(node * child){
		left = child;
		child->parent = this;
	}
	void setparent(node * p){
		parent = p;
	}



	node *getSucessor(node *n){

	}

	node *getPredecesor(node * n){

	}
};
//
//node node1(8);
//node node2(12);
//node node3(7);
//node node4(15);
//node node5(9);
//node node6(3);
//node node7(1);
//node node8(4);
node *null;
struct tree{
	node *root;
	
/*
	void init(){
		root = new node(10);
		root->setleftChild(&node1);
		root->setrightChild(&node2);
		node1.setleftChild(&node3);
		node2.setrightChild(&node4);
		node1.setrightChild(&node5);
		node3.setleftChild(&node6);
		node6.setleftChild(&node7);
		node6.setrightChild(&node8);
	}
*/
	tree(){
		null = new node(0);
		null->c = balck;
		null->left = null;
		null->right = null;
		null->parent = null;
		root = null;
		
	}
	void inorder(){

		node *pre = findMin(root);
		cout << pre->value << " ";
		node * current = next(pre);

		while (current != null){
			if (pre->right == current){
				pre = findMin(current);
				current = next(pre);
				cout << pre->value << " ";
			}
			else if (current->right == pre){
				pre = current;
				current = pre->parent;
			}
			else if (current->left == pre){
				cout << current->value << " ";
				pre = current;
				current = next(pre);
			}
		}
	}

	void print(){
		print(root);
	}
	void print(node * r){
		if (r != null){
			print(r->left);
			cout << r->value << ":" << r->c << " ";
			print(r->right);
		}
	}

	node * findMin(node *n){
		if (n->left != null)
			return findMin(n->left);
		return n;
	}

	node * findRoot(node *n){
		if (n->parent != null)
			return findRoot(n->parent);
		return n;
	}

	node * next(node *n){
		if (n->right!=null){
			return n->right;
		}
		else{
			return n->parent;
		}
	}

	void add(node *n){
		root=add(root, n);
		if (root == n)
			root->parent = null;
		br_insert_fix(n);
		root = findRoot(root);
	}
	void br_insert_fix(node *n){
		while (n->parent->c==red)
		{
			node *p = n->parent;
			node *gp = p->parent;
			if (p->c == red){
				if (p == gp->left){
					if (gp->right->c == red){
						p->c = balck;
						gp->right->c = balck;
						gp->c = red;
						n = gp;
					}
					else
					{
						if (n == p->right){
							n = n->parent;
							left_retate(n);
						}
						p = n->parent;
						gp = p->parent;
						p->c = balck;
						gp->c = red;
						right_retate(p);						
					}
				}
				else
				{
					if (gp->left->c == red){
						gp->left->c = balck;
						p->c = balck;
						gp->c = red;
						n = gp;
					}
					else{
						if (p->left == n){
							right_retate(n);
							n = n->right;
						}
						p = n->parent;
						gp = p->parent;
						p->c = balck;
						gp->c = red;
						left_retate(gp);
					}

				}
			}
		}
		findRoot(root)->c = balck;
	}

	void left_retate(node * n){
		node * y = n->right;
		n->right = y->left;
		n->right->parent = n;
		if (n->parent->left == n){
			n->parent->left = y;
		}
		else
		{
			n->parent->right = y;
		}
		y->parent = n->parent;
		y->left = n;
		n->parent = y;

	}
	void right_retate(node * n){
		node *y = n->parent;
		y->setleftChild(n->right);
		if (y->parent->left == y){
			y->parent->setleftChild(n);
		}
		else
		{
			y->parent->setrightChild(n);
		}
		n->setrightChild(y);
	}

	node* add(node *root, node *n){

		if (root == null){
			n->left = n->right = null;
			return n;
		}
		if (root->value > n->value){
			root->setleftChild( add(root->left, n));
		}
		else if (root->value < n->value){
			root->setrightChild (add(root->right, n));
		}
		else
		{
			cout << "same value in the tree!" << endl;
		}
		return root;
	}

	node * remove(int x){
		node *re = find(x);
		if (re == null){
			cout << " not found !" << endl;
			return null;
		}
		node *y;
		if (re->left == null || re->right == null)
			y = re;
		else
			y = findMin(re->right);

		node *t;
		if (y->left == null){
			t = y->right;
		}
		else{
			t = y->left;
		}

		t->parent = y->parent;
		if (y->parent->left == y){
			y->parent->left = t;
		}
		else
		{
			y->parent->right = t;
		}
		if (re !=  y){
			re->value = y->value;
		}
		if (y->c == balck){
			rb_delete_fix(t);
		}
	}

	void rb_delete_fix(node * n){
		while (n->parent != null&&n->c == balck){
			node * p = n->parent;
			node * w;
			if (p->left == n){
				w = p->right;
				if (w->c == red){
					p->c = red;
					w->c = balck;
					left_retate(p);
					w = p->right;
				}
				if (w->left->c == balck&&w->right->c == balck){

				}
			}
		}
		n->c = balck;
	}

	node * find(int x){
		root = findRoot(root);
		return find(root, x);
	}

	node * find(node * root, int x){
		if (root == null){
			return null;
		}

		if (root->value == x){
			return root;
		}

		if (root->value < x){
			return find(root->left, x);
		}
		if (root->value > x){
			return find(root->right, x);
		}
	}

	void test(){
		cout << "height:" << height(root) << endl;;
	}

	int height(node *n){
		if (n == null){
			return 0;
		}

		int left = height(n->left);
		int right = height(n->right);
		if (left !=  right)
			cout << " right!= left" << endl;
		return n->c == red ? left : left + 1;
	}
	
};


int main(){
	tree t;
	int x;
	while (cin>>x){
		node *n = new node(x);
		t.add(n);
		cout << "root:" << t.root->value << endl;;
		//t.inorder();
		t.print();
		t.test();
		cout << endl;
	}
}

