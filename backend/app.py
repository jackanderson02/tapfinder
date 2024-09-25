from flask import Flask, jsonify, request
import psycopg2
from psycopg2 import sql

app = Flask(__name__)

# Database connection parameters
DB_PARAMS = {
    'dbname': 'tapfinder',
    'user': 'postgres',
    'password': 'ilovebeers',
    'host': 'localhost',
    'port': '5432'
}

# Function to connect to the database
def get_db_connection():
    conn = psycopg2.connect(**DB_PARAMS)
    return conn

@app.route('/pubs', methods=['GET'])
def get_pubs():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('SELECT * FROM pub;')
    pubs = cur.fetchall()
    cur.close()
    conn.close()
    
    pubs_list = [{'pub_id': pub[0], 'pub_name': pub[1]} for pub in pubs]
    return jsonify(pubs_list)

@app.route('/beers', methods=['GET'])
def get_beers():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('SELECT * FROM beer;')
    beers = cur.fetchall()
    cur.close()
    conn.close()
    
    beers_list = [{'beer_id': beer[0], 'beer_name': beer[1]} for beer in beers]
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