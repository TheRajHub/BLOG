import './NavBar.jsx'
import NavBar from './NavBar.jsx'
import WelcomeBlogForm from './WelcomeBlogForm.jsx'
import Card from './Card.jsx'
import styles from './Admin.module.css'
import { useState } from 'react'
import Work from './Work';
function Admin(){
    const [selectedCardId, setSelectedCardId] = useState(null);

    const handleCardClick = (a) => {
        setSelectedCardId(a);
    };
    const result=[
        {
          id: 1,
          d: '2025-01-01T10:00:00Z',
          topic: 'New Year Celebration',
          img: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/02TqvUAAAAASUVORK5CYII=' // Placeholder Base64 image
        },
        {
          id: 2,
          d: '2025-01-02T14:30:00Z',
          topic: 'Work Update',
          img: null // No image for this entry
        },
        {
          id: 3,
          d: '2025-01-03T09:15:00Z',
          topic: 'React Workshop',
          img: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/02TqvUAAAAASUVORK5CYII=' // Another placeholder image
        }
      ]
    return(
        <>
            <NavBar/>
            <WelcomeBlogForm />
            <div className={styles.cardgrid}>
              {selectedCardId ? (
                    <Work id={selectedCardId}/>
                ) : (
                    result.length > 0 ? (
                        result.map((item) => {
                            const da = new Date(item.d);
                            const year = da.getFullYear();
                            const month = da.getMonth();
                            const date = da.getDate();
                            const fd = `${date}-${month + 1}-${year}`;
                            const image = item.img ? `data:image/*;base64,${item.img}` : null;

                            return (
                                <Card
                                    key={item.id}
                                    id={item.id}
                                    img={image}
                                    topic={item.topic}
                                    date={fd}
                                    onclick={handleCardClick}
                                />
                            );
                        })
                    ) : (
                        <h1>No DATA</h1>
                    )
              )}
            </div>
            
            
            
            
        </>
    )
}
export default Admin