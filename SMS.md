from twilio.rest import Client
import keys
import random
from termcolor import colored


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

askback = input("To Complete the Process, You got an OTP! Type it here: ")

if askback == OTP:
    print("Yes! Thats the OTP!")
else:
    print("No. Thats wrong. Try again")
LogOut = ('If you wish to log out type Yes here: ')
if LogOut == 'Yes' or 'yes':
    print()


    
    
    # KEYS
from termcolor import colored
from datetime import datetime
import datetime

in_or_up = input('Do you want to sign in or sign up?? (Write up sign up and write in to sign in to a existing account : )')

if in_or_up == 'UP' or 'up' or 'Up' or 'uP':
    print(colored("\nWelcome! ", "cyan"))

    account_sid = 'ACfaba46098c1cbc60954e12ab3ba225a8'
    auth_token = '7d24c8f453889ca1e8b806a21a192b10'

    twilio_number = '+14094032900'
    Username = input("Enter a Username you wish: ")
    Passcode = input("Enter a Passcode: ")
    def convert(date_time):
        format = '%b %d %Y'  # The format
        datetime_str = datetime.datetime.strptime(date_time, format)
        return datetime_str
    # BDAY
    # bday = input("When is your BirthDay?? (Month): ")
    # bdayd = input("When is your BirthDay?? (date): ")
    # bdayy = input("When is your BirthDay?? (Year): ")
    # today = datetime.datetime.today()
    # birthday = convert(f'{bday} {bdayd} {bdayy}')
    # dif = today - birthday
    # print(dif)
    # print(convert(f'{bday} {bdayd} {bdayy}'))
    # age = 2023 - int(bdayy)
    # nextbm = 12 - int(bday)
    # nextbd = int(bdayd) - 31
    # print(f"Your next Birthday is on {nextbm} months and {nextbd} days. Congrats you are going to turn {age} years")
    # ENDBDAY
    phone_number = input("Write you Phone Number : ")
    my_phone_number = f'+91{phone_number}'
    Itssent = print("Check Out Your Phone. I am sure you got an OTP")
if in_or_up == 'IN' or 'in' or 'IN' or 'iN':
    ask_for_username = input('Type out your Username here: ')
    if ask_for_username == Username:
        ask_for_passcode = input('Type you passcode here: ')
        if ask_for_passcode == Passcode:
            print('You are successfully logged in!')
        else:
            print('Wrong Passcode. Try again')
    else:
        print('Wrong Username.Try Again.')




