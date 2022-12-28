from termcolor import colored
import random
x = colored(f'\nWelcome To Guess The Word!', 'yellow', attrs=['bold'])
while True:
    print(x)
    print(colored(f'Guess This Word: ', 'magenta'))
    WORDS = ("Hello", "Wow", "Towmmrow", "What", "Answer", "Phone", "Friend")
    word = random.choice(WORDS)
    last = word[-1]
    first = word[0]
    length = len(word)
    randomnum = random.randint(0,length+1)
    anoranint = random.randint(0,5)
    print(colored(f"The first letter is {first} and the last letter is {last}. It has {length} letters."))
    askclue = input(colored("Write here if you want a clue! (Write Yes or No) : ", 'blue'))
    q = word[randomnum]
    dash = "_ "
    dasxle = dash*length
    anynum = random.randint(1,length)


    alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    ar = random.choice(alpha)
    anr = random.choice(alpha)
    anrs = random.choice(alpha)
    anrss = random.choice(alpha)
    anrsss = random.choice(alpha)
    anrssss = random.choice(alpha)
    anrssss = random.choice(alpha)
    if askclue == "Yes" or askclue == "yes":
        if word == "Hello":
            print(colored("\nIt is a simple greeting!", "cyan"))
        elif word == "Wow":
            print(colored("\nYou tell this when you are surprised of something good!", 'cyan'))
        elif word == "Towmmrow":
            print(colored("\nSomething is the future!", 'cyan'))
        elif word == "What":
            print(colored("\nYou use it in questions!", 'cyan'))
        elif word == "Answer":
            print(colored("\nSynonym of Response", 'cyan'))
        elif word == "Phone":
            print(colored("\nYou cant live without it! :)", 'cyan'))
        elif word == "Friend":
            print(colored("\nYour Best _ _ _ _ _ _ ! ", 'cyan'))
    else:
        alphabet = [ar, anr, anrs, anrss, q, anrsss, anrssss, anrssss]
        actualq = word.find(q)
        print(f"Chose which letter from these alphabets: {alphabet}")
        inputforchose = input(
            f"Write which letter comes in place of number {actualq + 1} (Chose from the above letters!): ")
        if inputforchose == q:
            print(f"You are right! That's the letter number {actualq + 1}")
        else:
            print("Wrong Try again! (You have 2 more go's)")
            h = input("Write the letter again: ")
            if h == q:
                print("You are right this time!")
            else:
                print("Wrong again! (1 more try left)")
                z = input("Write again: ")
                if z == q:
                    print("Finnaly you are right!")
                else:
                    print(colored("Sorry your tries are over!     GAME OVER!", 'red'))
                    break
        print(colored("Do the next things by yourself!", 'yellow'))
        print(colored("Warning - USE UPPERCASE FOR THE FIRST LETTER IN EVERY WORD.", 'red', attrs=['bold']))
        ans = input(colored("Write the answer: ", 'cyan'))
        if ans == word:
            print(colored("You are right!", 'green'))
        else:
            print(colored("Wrong. Try again!", 'red'))

        con = input("Do you want to try again? (Yes or No) :")
        if con == "Yes" or "yes":
            print();

