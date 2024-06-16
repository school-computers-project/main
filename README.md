# main


School computers project

Do note that this repo comes with full production server, so viewing site normally does not work. View the live site [here]().

# Production setup 

It is suggested to use a seperate python virtual environment.

1. Clone the repository

``` git clone https://github.com/school-computers-project/main.git ```

2. Make or use an existing virtual environment:

``` python3 -m venv productionEnv ```

enter virtual environment:

```source productionEnv/bin/activate```


3. Install app + requirements

``` 
pip install -r requirements.txt # install requirements

pip install . # installs the app
```