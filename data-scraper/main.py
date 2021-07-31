import requests
import pandas as pd
import re
from pandas import ExcelWriter
from collections import OrderedDict
# importing required modules  
import PyPDF2  
    
# creating a pdf file object  
pdfFileObj = open('UCR_Catalog_2019-2020.pdf', 'rb')  
    
# creating a pdf reader object  
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)  
    
# printing number of pages in pdf file  
pages = pdfReader.numPages
    
# creating a page object  

    
# extracting text from page  
#print(pageObj.extractText())  
full_text = []
for x in range(551):
    pageObj = pdfReader.getPage(x)  
    full_text.append(pageObj.extractText())
    
#print(full_text)
# closing the pdf file object  
pdfFileObj.close()  

regex = r"\b[A-Z]{2,4}\s[0-9]{3}[A-Z]?\b"
line = ''.join(full_text)
classes = re.findall(regex, line)

res = list(OrderedDict.fromkeys(classes))
#   print(res)

final = [ '(\'{}\')'.format(x).replace(' ','') for x in res]
heh = ','.join(final)
print(heh)