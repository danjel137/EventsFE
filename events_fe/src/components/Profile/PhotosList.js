// import classes from './PhotosList.css';
import {Link} from "react-router-dom";
import "./PhotosList.css"
import {useEffect} from "react";

function PhotosList({photos}) {
    useEffect(() => {
        const scrollers = document.querySelectorAll('.scroller');

        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            addAnimation(scrollers);
        }

        return () => {
            // Cleanup if needed
        };
    }, []);

    const addAnimation = (scrollers) => {
        scrollers.forEach((scroller) => {
            scroller.setAttribute('data-animated', true);

            const scrollerInner = scroller.querySelector('.scroller__inner');
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute('aria-hidden', true);
                scrollerInner.appendChild(duplicatedItem);
            });
        });
    };
    return (
        <div className={"wrapper"}>



            <div className={"wrap-scroller"}>
                <h1>Photos</h1>
                <div className="scroller" data-direction="left" data-speed="slow">
                    <div className="scroller__inner">
                        {Array.isArray(photos) && photos.length > 0 ? (
                            photos.map((photos) => (
                                    <Link to={`${photos.id}`}>
                                        <img src={photos.image_base64} alt={photos.title}/>
                                    </Link>
                            ))
                        ) : (
                            <p>No photos available. Please add photos here.</p>
                        )}
                    </div>
                </div>
                <h1>Friends</h1>
                <div className="scroller" data-direction="right" data-speed="slow">
                    <div className="scroller__inner">
                        <img src="https://i.pravatar.cc/150?img=1" alt=""/>
                        <img src="https://i.pravatar.cc/150?img=2" alt=""/>
                        <img src="https://i.pravatar.cc/150?img=3" alt=""/>
                        <img src="https://i.pravatar.cc/150?img=4" alt=""/>
                        <img src="https://i.pravatar.cc/150?img=5" alt=""/>
                        <img src="https://i.pravatar.cc/150?img=6" alt=""/>
                    </div>
                </div>


            </div>


            <div className="photos">
                <ul className="list">
                    {Array.isArray(photos) && photos.length > 0 ? (
                        // If events is an array and has data, render the list
                        photos.map((photos) => (
                            <li key={photos.id} className="item">
                                <Link to={`${photos.id}`}>
                                    <img src={photos.image_base64} alt={photos.title}/>
                                    <div className="content">
                                        <h2>{photos.title}</h2>
                                        <p>{photos.description}</p>
                                    </div>
                                </Link>
                            </li>
                        ))
                    ) : (
                        <p>No photos available. Please add photos here.</p>
                    )}
                </ul>
            </div>

        </div>
    );


}

export default PhotosList;
