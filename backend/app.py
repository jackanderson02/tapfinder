from flask import Flask, jsonify, request
# import psycopg2
# # from psycopg2 import sql

app = Flask(__name__)

# Database connection parameters
# DB_PARAMS = {
#     'dbname': 'tapfinder',
#     'user': 'postgres',
#     'password': 'ilovebeer',
#     'host': '172.17.0.2',
#     'port': '5432'
# }

# connection = psycopg2.connect(
#     dbname="tapfinder",
#     user="postgres",
#     password="ilovebeer",
#     host="172.17.0.2",  # or use the container IP or service name
#     port="5432"
# )

# Function to connect to the database
# def get_db_connection():
#     conn = psycopg2.connect(
#         dbname="tapfinder",
#         user="user",
#         password="ilovebeer",
#         host="localhost",  # or use the container IP or service name
#         port="5432"
#     )
#     return conn

@app.route('/', methods=['GET'])
def get_root():
    return "Hello World"

@app.route('/pubs', methods=['GET'])
def get_pubs():
    pubs_list = [
         {
        "id": 1,
        "name": "The Winchester",
        "open_time_hour": 11,
        "close_time_hour": 20,
        "pub_url":
          "https://movie-locations.com/movies/s/Shaun-Of-The-Dead-Monson-Road.jpg",
      },
      {
        "id": 2,
        "name": "The Boozer",
        "open_time_hour": 8,
        "close_time_hour": 23,
        "pub_url":
          "https://cdn.prod.website-files.com/647991321943a79a7deddbb2/65ed8f0da756275eb6db2308_655f32e7367b50bb663da593_%25E8%259E%25A2%25E5%25B9%2595%25E6%2593%25B7%25E5%258F%2596%25E7%2595%25AB%25E9%259D%25A2%25202023-11-23%2520190920.png",
      },
      {
        id: 3,
        "name": "Sinclair Arms",
        "open_time_hour": 17,
        "close_time_hour": 18,
        "pub_url": "",
      }
    ]
    return jsonify(pubs_list)

@app.route('/beers', methods=['GET'])
def get_beers():
    beers_list = [
         {"id": 1, "name": "Thatchers", "type" : "cider",
            "beer_url": "https://www.ukglassware.com/cdn/shop/products/6A8D1564-44B9-4226-BB10-8182673C74E0.jpg?v=1661450365"},
        {"id": 2, "name": "Guinness", "type" : "Stout",
            "beer_url":"https://static.standard.co.uk/2022/01/21/18/d9a4ce0ab5b745accc3208b9ff4e1577Y29udGVudHNlYXJjaGFwaSwxNjQyODY4NTkz-2.61189514.jpg?width=1200&height=1200&fit=crop"},
        {"id": 3, "name": "Fosters", "type" : "Lager",
            "beer_url":"https://i2-prod.hulldailymail.co.uk/news/uk-world-news/article8592028.ece/ALTERNATES/s810/0_PinPep_Fosters_Campaign_011JPG.jpg"}
    ]
    return jsonify(beers_list)

@app.route('/pubs/<int:pub_id>/beers', methods=['GET'])
def get_beers_for_pub(pub_id):
    conn = get_db_connection()
    cur = conn.cursor()
    query = sql.SQL('''
        SELECT b.beer_id, b.beer_name
        FROM pubs_beers pb
        JOIN beer b ON pb.beer_id = b.beer_id
        WHERE pb.pub_id = %s;
    ''')
    cur.execute(query, (pub_id,))
    beers = cur.fetchall()
    cur.close()
    conn.close()
    
    beers_list = [{'beer_id': beer[0], 'beer_name': beer[1]} for beer in beers]
    return jsonify(beers_list)

if __name__ == '__main__':
    app.run(debug=True)