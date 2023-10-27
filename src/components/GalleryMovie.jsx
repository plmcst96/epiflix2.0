import { Component } from "react";
import { Carousel, CarouselItem, Container} from "react-bootstrap";


class GalleryMovie extends Component{

state = {
    movies: [],
};

    getMovie = async ()=>{  
    try {
        const res = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=6a29bd70&s=' +this.props.idSearch)
        if(res.ok){
            const movie = await res.json()
            console.log(movie)
          this.setState({
            movies: movie.Search,
          })
        } else {
            throw new Error('Errore nel caricamento dati')
        }
    
    } catch (error) {
        console.log('errore', error)
    
    }
}

componentDidMount(){
    this.getMovie()
}

    render(){
        return(
            <Container fluid>
              <Carousel>
                 {
                    this.state.movies.map((fim) => 
                        
                        <CarouselItem key={fim.imdbID}>
                          <img src={fim.Poster} alt={fim.Title} />
                        </CarouselItem>
                        
                    )
                }
              </Carousel>
            </Container>
        )
    }
}

export default GalleryMovie