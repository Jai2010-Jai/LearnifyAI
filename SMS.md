from twilio.rest import Client
import keys
import random

onenum = random.randint(1,10)
twonum = random.randint(1,10)
threenum = random.randint(1,10)
fournum = random.randint(1,10)
fivenum = random.randint(1,10)

OTP = f"{onenum}{twonum}{threenum}{fournum}{fivenum}"

client = Client(keys.account_sid, keys.auth_token)

message = client.messages.create(
    body=f" Check out your OTP - {OTP}",
    from_=keys.twilio_number,
    to=keys.my_phone_number
)

print(message.body)

askback = input("Type out the OTP here : ")

if askback == OTP:
    print("Yes! Thats the OTP!")
else:
    print("No. Thats wrong. Try again")
    
    
    
    
    # KEYS
account_sid = 'ACfaba46098c1cbc60954e12ab3ba225a8'
auth_token = '7d24c8f453889ca1e8b806a21a192b10'

twilio_number = '+14094032900'
Nameforfun = input("Tell me your name: ")
print(f"Hello {Nameforfun}")
bday = input("When is your BirthDay?? (Month): ")
bdayd = input("When is your BirthDay?? (date): ")
bdayy = input("When is your BirthDay?? (Year): ")
age = 2023 - int(bdayy)
nextbm = 12 - int(bday)
nextbd = int(bdayd) -27

print(f"Your next Birthday is on {nextbm} months and {nextbd} days. Congrats you are going to turn {age} years")
phone_number = input("Write you Phone Number : ")
my_phone_number = f'+91{phone_number}'
Itssent = print("Check Out Your Phone. I am sure you got an OTP")
