#include<iostream>
#include<sstream>
#include<string>
#include<algorithm>
using namespace std;
int main(){
    int x;
    while(true){
           if(cin>> x){
                cout<<"����ֵ��"<<x<<endl;
                 stringstream ss;
                 ss<<x;
                 string s;
                 ss>>s;
                 reverse(s.begin(),s.end());
                 cout<<"reverse:"<<s<<endl;
                 ss.clear();
                 ss.str("");
                 ss<<s;
                 cout<<"ss:"<<ss.str()<<endl; 
                  int y;
                 if(ss>>y){
                        cout<<"���:"<<y<<endl;   
                 }else{
                       cout<<"������"<<endl; 
                 }    
           }else{
                 cout<<"�����������"<<endl; 
                 cin.sync();
                 cin.clear();
           }          
 }
 system("pause");
 return 0;
    
} 
