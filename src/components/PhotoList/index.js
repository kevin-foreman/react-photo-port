import React, { useState } from 'react';

import Modal from '../Modal';

const PhotoList = ({ category }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState();

    const [photos] = useState([
        {
            name: 'Grocery aisle',
            category: 'commercial',
            description: 'This is a modified photograph of a grocery store produce section, made with PhotoShop',
        },
        {
            name: 'Grocery booth',
            category: 'commercial',
            description: 'Rendered photo of more grocery store items',
        },
        {
            name: 'Building exterior',
            category: 'commercial',
            description: 'This is a building in Chicago I found very interesting in its archetecture',
        },
        {
            name: 'Restaurant table',
            category: 'commercial',
            description: 'This cozy cafe wanted photos for their website, turned out great',
        },
        {
            name: 'Cafe interior',
            category: 'commercial',
            description: 'This cafe is located in Jacksonville, Florida, if you look closely you can see a surfboard',
        },
        {
            name: 'Cat green eyes',
            category: 'portraits',
            description: 'This is a photo of my neighbors cat, my parents will not let me get a cat',
        },
        {
            name: 'Green parrot',
            category: 'portraits',
            description: 'I found this green parrot at a local pet store he was very photogenic',
        },
        {
            name: 'Yellow macaw',
            category: 'portraits',
            description: 'The yellow macaw with a single wing on display',
        },
        {
            name: 'Pug smile',
            category: 'portraits',
            description: 'This doggo looks like he is smiling',
        },
        {
            name: 'Pancakes',
            category: 'food',
            description: 'Pancakes are very photogenic in high stacks like this one',
        },
        {
            name: 'Burrito',
            category: 'food',
            description: 'Chipotle is my life',
        },
        {
            name: 'Scallop pasta',
            category: 'food',
            description: 'Took this photo at a little ristorante in Paris, France',
        },
        {
            name: 'Burger',
            category: 'food',
            description: 'Burgers are my favorite, especially when they look this good',
        },
        {
            name: 'Fruit bowl',
            category: 'food',
            description: 'My son prefers fruit bowls like this for breakfast',
        },
        {
            name: 'Green river',
            category: 'landscape',
            description: 'This winding river is behind our vacation home in Montana',
        },
        {
            name: 'Docks',
            category: 'landscape',
            description: 'Photographed this picturesque dock near Cocoa Beach, Florida',
        },
        {
            name: 'Panoramic village by sea',
            category: 'landscape',
            description: 'On vacation in Mallorca, and captured these beautiful cliff-side buildings',
        },
        {
            name: 'Domestic landscape',
            category: 'landscape',
            description: 'Took this photo for a real estate company where I went to college',
        },
        {
            name: 'Park bench',
            category: 'landscape',
            description: 'This lonely bench can be found at a park in London where we visited in 2018',
        },
    ]);

    const currentPhotos = photos.filter(photo => photo.category === category);

    const toggleModal = (image, i) => {
        setCurrentPhoto({ ...image, index: i });
        setIsModalOpen(!isModalOpen);
    }

    return (
        <div>
            {isModalOpen && (
                <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
            )}

            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                    <img
                        src={require(`../../assets/small/${category}/${i}.jpg`)}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        onClick={() => toggleModal(image, i)}
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default PhotoList;