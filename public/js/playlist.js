export class Playlist {
    static currentMapIndex;
    static maps;
    static currentMapContainer;
    static nextMapContainer;
    static next2MapContainer;

    static init(index, maps){
        this.currentMapContainer = document.getElementById('currentMap');
        this.nextMapContainer = document.getElementById('nextMap');
        this.next2MapContainer = document.getElementById('next2Map');
        this.maps = maps;
        this.currentMapIndex = index;
        this.display();
    }

    static change(index){
        this.currentMapIndex = index;
        this.display();
    }

    static display(){
        let i = (this.currentMapIndex % this.maps.length + this.maps.length) % this.maps.length;
        this.currentMapContainer.querySelector('.author').innerHTML = 'Author: '+this.formatToTM2html(this.maps[i].Author);
        this.currentMapContainer.querySelector('.name').innerHTML = this.formatToTM2html(this.maps[i].Name);
        this.currentMapContainer.querySelector('.envi').src = './images/'+this.maps[i].Environnement+'.jpg';
        let j = ((this.currentMapIndex + 1) % this.maps.length + this.maps.length) % this.maps.length;
        this.nextMapContainer.querySelector('.author').innerHTML = 'Author: '+this.formatToTM2html(this.maps[j].Author);
        this.nextMapContainer.querySelector('.name').innerHTML = this.formatToTM2html(this.maps[j].Name);
        this.nextMapContainer.querySelector('.envi').src = './images/'+this.maps[j].Environnement+'.jpg';
        let k = ((this.currentMapIndex + 2) % this.maps.length + this.maps.length) % this.maps.length;
        this.next2MapContainer.querySelector('.author').innerHTML = 'Author: '+this.formatToTM2html(this.maps[k].Author);
        this.next2MapContainer.querySelector('.name').innerHTML = this.formatToTM2html(this.maps[k].Name);
        this.next2MapContainer.querySelector('.envi').src = './images/'+this.maps[k].Environnement+'.jpg';
    }

    static formatToTM2html(string){
        // strip formatting
        string = string.replace(/[$][nmwoszi]|[$][hl][\[][a-zA-Z0-9/?#!&\.\\\-_=@$'()+,;:]*[\]]/gi, '');

        if (string.includes('$')) {
            // only colors left now
            var split = string.split('$');

            let output = '';
            split.forEach(elem => {
                var color = elem.substring(0, 3);
                var text = elem.substring(3);

                output += '<span style="color:#' + color + ';">' + text + '</span>';
            });

            return output;
        } else {
            return string;
        }
    }
};