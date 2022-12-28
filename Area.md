print("T or t for triangle")
print("S or s for square")
print("H or h for hexagon")
print("O or o for octagon")
print("D or d for decagon")
x = input("Write which polygon you want to chose: ")

if x == "T" or x == "t":
    base = input("Write the base: ")
    height = input("Write the height: ")
    atr = 1/2*int(base)*int(height)
    print(atr)
if x == "S" or x == "s":
    side = input("Write the side: ")
    sar = int(side)*int(side)
    print(sar)
if x == "H" or x == "h":
    sidhe = input("Write the side: ")
    harea = ((3 * (0.5 ** 3)) / 2) * (int(sidhe) * int(sidhe))
    print(harea)
if x == "O" or x == "o":
    ocarea = input("Write the side: ")
    oarea = 2 * (1+(2**0.5)) * int(ocarea) * int(ocarea)
    print(oarea)
if x == "D" or x == "d":
    dcarea = input("Write the side: ")
    darea = 5/2* int(dcarea) * int(dcarea) * 0.5 ** ((5+2) * (0.5 ** 5))
    print(darea)
