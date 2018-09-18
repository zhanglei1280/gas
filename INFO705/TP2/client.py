# simple test program (from the XML-RPC specification)

from xmlrpclib import ServerProxy, Error

server = ServerProxy("http://192.168.43.231:3111") # local server
#server = ServerProxy("http://betty.userland.com")

print server

try:
    print server.MoteurCalculSimple.calculer("2+8")
except Error as v:
    print "ERROR", v