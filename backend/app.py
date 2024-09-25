from flask import Flask, jsonify, request
# import psycopg2
# # from psycopg2 import sql

app = Flask(__name__)

# Sample data for pubs and beers
pubs_list = [
    {
        "id": 1,
        "name": "The Winchester",
        "open_time_hour": 11,
        "close_time_hour": 20,
        "pub_url": "https://movie-locations.com/movies/s/Shaun-Of-The-Dead-Monson-Road.jpg",
        "beers": [1, 2, 3]
    },
    {
        "id": 2,
        "name": "The Boozer",
        "open_time_hour": 8,
        "close_time_hour": 23,
        "pub_url": "https://cdn.prod.website-files.com/647991321943a79a7deddbb2/65ed8f0da756275eb6db2308_655f32e7367b50bb663da593_%25E8%259E%25A2%25E5%25B9%2595%25E6%2593%25B7%25E5%258F%2596%25E7%2595%25AB%25E9%259D%25A2%25202023-11-23%2520190920.png",
        "beers": [1]
    },
    {
        "id": 3,
        "name": "Sinclair Arms",
        "open_time_hour": 17,
        "close_time_hour": 18,
        "pub_url": "",
        "beers": [2, 3]
    }
]

beers_list = [
    {"id": 1, "name": "Thatchers", "type": "cider",
     "beer_url": "https://www.ukglassware.com/cdn/shop/products/6A8D1564-44B9-4226-BB10-8182673C74E0.jpg?v=1661450365"},
    {"id": 2, "name": "Guinness", "type": "Stout",
     "beer_url": "https://static.standard.co.uk/2022/01/21/18/d9a4ce0ab5b745accc3208b9ff4e1577Y29udGVudHNlYXJjaGFwaSwxNjQyODY4NTkz-2.61189514.jpg?width=1200&height=1200&fit=crop"},
    {"id": 3, "name": "Fosters", "type": "Lager",
     "beer_url": "https://i2-prod.hulldailymail.co.uk/news/uk-world-news/article8592028.ece/ALTERNATES/s810/0_PinPep_Fosters_Campaign_011JPG.jpg"}
]

@app.route('/', methods=['GET'])
def get_root():
    return "Hello World"

@app.route('/pubs', methods=['GET'])
def get_pubs():
    return jsonify(pubs_list)

@app.route('/beers', methods=['GET'])
def get_beers():
    return jsonify(beers_list)

@app.route('/pubs/<int:pub_id>/beers', methods=['GET'])
def get_beers_for_pub(pub_id):
    # Find the pub by its ID
    pub = next((pub for pub in pubs_list if pub["id"] == pub_id), None)
    
    if pub is None:
        # Return a 404 error if the pub is not found
        return jsonify({"error": "Pub not found"}), 404

    # Get the list of beer IDs for the specific pub
    pub_beer_ids = pub["beers"]

    # Filter the beers from the beers_list based on the pub's beer IDs
    pub_beers = [beer for beer in beers_list if beer["id"] in pub_beer_ids]

    return jsonify(pub_beers)

@app.route('/pubs/<int:pub_id>/beers/<int:beer_id>', methods=['POST'])
def add_beer_to_pub(pub_id, beer_id):
    # Find the pub by its ID
    pub = next((pub for pub in pubs_list if pub["id"] == pub_id), None)
    
    # Check if the pub exists
    if pub is None:
        return jsonify({"error": "Pub not found"}), 404

    # Check if the beer exists
    beer = next((beer for beer in beers_list if beer["id"] == beer_id), None)
    
    if beer is None:
        return jsonify({"error": "Beer not found"}), 404

    # Check if the beer is already added to the pub
    if beer_id in pub["beers"]:
        return jsonify({"error": "Beer already added to this pub"}), 400

    # Add the beer ID to the pub's list of beers
    pub["beers"].append(beer_id)

    return jsonify({"message": "Beer added to pub successfully", "pub": pub}), 201

if __name__ == '__main__':
    app.run(debug=True)
