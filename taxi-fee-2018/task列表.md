### taxiFee.feature
Feature: Taxi Fee

​	Scenario:两公里内时计费  
​    		Given 1.5公里，等待10分钟  
​    		When 计费  
​    		Then 车费9元

​	Scenario:两公里以上八公里公里以内时计费  
    		Given 5.8公里，等待10分钟  
    		When 计费  
    		Then 车费12元  

​	Scenario:八公里以上时计费  
​    		Given 8.5公里，等待10分钟  
​    		When 计费  
​    		Then 车费15元  	



