#define - за допомогою директиви ми даємо ім'я константі перед тим як програма буде скомпільована;
#define DATA 6 - під'єднуємось до 14 піна в 74HC595;
#define LATCH 8 - під'єднуємось до 12 піна в 74HC595;
#define CLOCK 10 - під'єднуємось до 1 піна в 74HC595;
int temp = 0 - ініціалізація змінної temp типу int (ціле число)та присвоєння початкового значення;
float voltage = 0 - ініціалізація змінної voltage типу float (число з плаваючою комою) та присвоєння початкового значення;
float celsius = 0 - іініціалізація змінної celsius типу float (число з плаваючою комою) та присвоєння початкового значення; 
float sensor = 0 - ініціалізація змінної celsius типу float (число з плаваючою комою) та присвоєння початкового значення; 
int digits[] - створення масиву з сегментами від 0 до 9, від А до F;
void setup() - ця функція містить збір інструкцій, що виконуються системою Arduino тільки раз-безпосередньо при ввімкненні або при новому запуску.
pinMode(LATCH, OUTPUT) - встановлення режиму роботи заданого піна як вихід;
pinMode(CLOCK, OUTPUT) - встановлення режиму роботи заданого піна як вихід;
pinMode(DATA, OUTPUT) - встановлення режиму роботи заданого піна як вихід;
void displayNumber(int n) - функція для автоматизації відображення одно або двозначного числа.
int left, right = 0; ініціалізація змінних left, right типу int (ціле число)та присвоєння початкового значення;
digitalWrite(LATCH, LOW) - подає низький рівень 0В на заданий пін ;
shiftOut(DATA, CLOCK, LSBFIRST, digits[n]) - виводить байт інформації на порт вихода;
shiftOut(DATA, CLOCK, LSBFIRST, digits[0]) - виводить байт інформації на порт вихода;
digitalWrite(LATCH, HIGH) - подає високий рівень 5В на заданий пін;
right = n % 10 - залишкове розділення числа на дисплей до 10;
left = n / 10 - частка розподілу числа на дисплей до 10;
digitalWrite(LATCH, LOW) - подає низький рівень 0В на заданий пін ;
shiftOut(DATA, CLOCK, LSBFIRST, digits[right]) - виводить байт інформації на порт вихода ;
shiftOut(DATA, CLOCK, LSBFIRST, digits[left]) -  виводить байт інформації на порт вихода;
digitalWrite(LATCH, HIGH) - подає високий рівень 5В на заданий пін;
void loop() - багатократне виконання системою Arduino інструкцій записаних в програмі до моменту відмикання живлення або натискання клавіші RESET;
sensor = analogRead(5) - функція зчитує значення з вказаного аналогового входу;
voltage = (sensor * 5000) / 1024 - ; перетворення значення вихідного датчика до мілівольт ;
voltage = voltage - 500 - зняти напругу зсуву;
celsius = voltage / 10 - перетворити мілівольт до Цельсія;
temp = int(celsius) - змінити температуру з плаваючою точкою на int;
displayNumber(temp) - відображення значення температури;
delay(500) - зупиняє виконання програми на 0.5с;