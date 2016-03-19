#include<vector>
#include<iostream>
#include<string>
#include<bitset>
#include<sstream>
#include<algorithm>
#include<utility>
#include<map>
#include<iterator>
//#include<cstdlib>
using namespace std;

int main(){
	vector<string> svec;
	vector<string> des;
	fill(svec.begin(),svec.end(),"");
	find(svec.begin(),svec.end(),"");
	count(svec.begin(),svec.end(),"");
	fill_n(svec.begin(),10,"");
	fill_n(back_inserter(svec),10,"");
	copy(svec.begin(),svec.end(),des.begin());
	copy(svec.begin(),svec.end(),back_inserter(des));
	replace(svec.begin(),svec.end(),"old","new");
	replace_copy(svec.begin(),svec.end(),des.begin(),"old","new");
	replace_copy(svec.begin(),svec.end(),back_inserter(des),"old","new");
	return 0;
}

//int main(){
//	map<string,int> word_count;
//	string input;
//	cout<<"Enter words!"<<endl;
//	while(cin>>input){
//		pair<map<string,int>::iterator,bool> ret=word_count.insert(make_pair(input,1));
//		if(!ret.second){
//			ret.first->second++;
//		}
//	}
//	for(map<string,int>::iterator iter=word_count.begin();iter!=word_count.end();iter++){
//		cout<<iter->first<<"; "<<iter->second<<" "<<endl;
//	}
//	return 0;
//}

//int main(){
//	map<string,int> word_count;
//	cout<<"enter words !"<<endl;
//	string input;
//	while(cin>>input){
//		word_count[input]++;
//	}
//	for(map<string,int>::iterator iter=word_count.begin();iter!=word_count.end();iter++){
//		cout<<iter->first<<":"<<iter->second<<" "<<endl;
//	}
//	return 0;
//}


//int main(){
//	string s1="hello";
//	string s2="jjjje";
//	string::size_type pos=s1.find_first_of(s2);
//	cout<<"pos="<<pos<<endl;
//	cout<<"npos="<<string::npos<<endl;
//	return 0;
//
//}



//void myprint(const vector<string> & svec){
//
//	for(vector<string>::const_iterator iter=svec.begin();iter!=svec.end();iter++)
//	{
//		cout<<*iter<<" ";
//	}
//	cout<<endl;
//}
//
//int main(){
//	vector<string> svec;
//	cout<<"enter some strings :"<<endl;
//	string s;
//	while (cin>>s)
//	{
//		svec.push_back(s);
//	}
//	cin.clear();
//	myprint(svec);
//	cout<<"enter the word you want to delete!:"<<endl;
//	cin>>s;
//	vector<string>::iterator iter=find(svec.begin(),svec.end(),s);
//	while((iter=find(svec.begin(),svec.end(),s))!=svec.end()){
//		svec.erase(iter);
//	}
//		
//	myprint(svec);
//	return 0;
//}



//int main(){
//	stringstream stream;
//	stream<<"hello world";
//	cout<<stream.str()<<flush;
//	
//
//	return 0;
//}

//int main(){
//	int x=static_cast<int>( 3.14);
//	wcin>>x;
//	cout<<"hello world!"<<flush;
//	istream::iostate hello;
//	return 0;
//	cin.tie(&cout);
//}


//string init();
//int main(){
//	int init=0;//局部变量可以屏蔽全局函数。
//	string s=init();
//
//}

//
//int func(int x,...){
//}

//int sum(vector<int>::const_iterator begin,vector<int>::const_iterator end){
//	int sum=0;
//	for(;begin!=end;begin++){
//		sum+=*begin;
//	}
//	return sum;
//
//}
//int main(){
//	vector<int> ivec;
//	for (int i = 0; i <= 100; i++)
//	{
//		ivec.push_back(i);
//	}
//	cout<<"sum="<<sum(ivec.begin(),ivec.end())<<endl;
//	return 0;
//}



//int main(){
//	bitset<100> bit;
//	for(size_t i=0;i<bit.size();i++){
//		bit[i]=1;
//
//	}
//
//	try{
//		bit.to_ullong();
//	}catch(runtime_error err){
//		cout<<err.what()<<endl;
//	}
//	return 0;
//}

//int main(){
//	vector<int> ivec;
//	for(int i=0;i<100;i++)
//		ivec.push_back(i);
//	for(vector<int>::size_type i=0;i<ivec.size();i++){
//		cout<<ivec[i]<<" ";
//	}
//	cout<<endl;
//	for(vector<int>::iterator iterator=ivec.begin();iterator!=ivec.end();iterator++){
//		cout<<*iterator<<" ";
//	}
//	cout<<endl;
//	size_t size; 
//	int x=NULL;
//	int &xx=x;
//	
//	return 0;
//}

//int main(){
//	int i=42,j=1024;
//	int *p1=&i,*p2=&j;
//	*p2=*p1**p2;
//	*p1*=*p1;
//	cout<<"i="<<i<<" j="<<j<<endl;
//
//	return 0;
//	ptrdiff_t ptr;
//	size_t d;
//}


//int main(){
//	int x=1;
//	const int y=x;
//	return 0;
//	strlen("dda");
//}

//int main(){
//	char hello[100];
//	cin>>hello;
//	cout<<hello<<endl;
//	
//	return 0;
//}

//int main(){
//	vector<string> svec;
//	string str;
//	while(cin>>str)
//		svec.push_back(str);
//	size_t size=svec.size();
//	char** cpp=new char*[size];
//	char**tmp=cpp;
//	for(vector<string>::iterator iter=svec.begin();iter!=svec.end();iter++,tmp++){
//		size_t len=(*iter).size();
//		*tmp=new char[len+1];
//		strncpy(*tmp,(*iter).c_str(),len+1);
//		
//	}
//	cout<<endl;
//	for(char **i=cpp;i!=cpp+size;i++){
//		cout<<*i<<"  ";
//	}
//	cout<<endl;
//}

//int main(){
//	int x[][4]={1,2,3,4,5,6,7,8,9,10,11,12};
//	int (*p)[4]=x;
//	for(int (*i)[4]=p;i!=p+3;i++){
//		for(int *j=*i;j!=*i+4;j++){
//			cout<<*j<<" ";
//		}
//		cout<<endl;
//指向数组的指针
//	}
//
//	typedef int arr[4];
//	arr * ss=x;
//	for(arr * i=ss;i!=ss+3;i++){
//		for(int* j=*i;j!=*i+4;j++){
//			cout<<*j<<" ";
//		}
//		cout<<endl;
//
//	}
//  return 0;
//}

//int main(){
//	unsigned x=0;
//	unsigned y=4;
//	cout<<"!x= "<<!x<<endl;
//	cout<<"~x="<<~x<<endl;
//	cout<<"x||y="<<(x||y)<<endl;
//	cout<<"x|y="<<(x|y)<<endl;
//	cout<<"y<<4="<<(y<<4)<<endl;
//	return 0;
//}


//int main(){
//	vector<int> x,y;
//	y=x;
//	int z=3;
//	z=3.14;
//
//
//	return 0;
//}

//int main(){
//	vector<string*> x;
//	for(vector<string*>::iterator iter=x.begin();iter!=x.end();iter++){
//		cout<<**iter;
//		++*iter;
//		*(*iter)++;
//	}
//
//
//	return 0;
//}

//int main(){
//	int x1=-1;
//	unsigned x2=3;
//	cout<<(x1>x2)<<endl;//true亮瞎了
//}

//int main(){
//	
//	int x[4];
//	x+4;
//	int *p=x;
//	int *ps=&x[0];
//
//	switch(2){
//	//switch中非case中的语句会被跳过。
//	case 2:
//		cout<<"hello world!"<<endl;
//		break;
//	default:
//		int x=6;
//		cout<<"x="<<x<<endl;
//			break;
//	}
//		
//	do{
//
//		int c=4;
//	}while(c==3);
//
//	return 0;
//}

