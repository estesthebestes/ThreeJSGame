import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'



export const entity_manager = (() => {

    class EntityManager {
        constructor(){
            this._ids = 0;
            this._entitiesMap = {};
            this._entities = {};

        }
        _GenerateName(){
            this._ids +=1;
            return '_name_' + this._ids;
        }

        Get(n){
            return this._entitiesMap[n];
        }

        Filter(cb) {
            return this._entities.filter(cb);
        }

        Add(e, n)

    }
}