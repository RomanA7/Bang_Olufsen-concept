import React from 'react'
import Card from './Card'

function Features() {
const Features = [
    {"number": 1, 
    "title": "One charge. Days of play.", 
    "text": "Beoplay H95 always gives you the best sound while using active noise cancellation, for up to 38 hours of non-stop listening. That's a trip from Paris to Perth and back again. Turning ANC off takes you up to an unbelievable 50 hours."},
    {"number": 2, 
    "title": "Seamless connectivity.", 
    "text": "Quick set up, intuitive user controls and Bluetooth 5.1 allow you to connect easily to the devices you already love. And if you want to make a few sounds of your own, four microphones keep your voice crystal clear on calls."},
    {"number": 3, 
    "title": "Almost-unreal comfort.", 
    "text": "So comfortable, it's like you're not wearing them at all. Oval memory foam cushions, soft top grain lambskin and a superior fit invite you to play all day."}
]

    return (
        <div className="grid lg:grid-cols-3 gap-5 mx-6 md:grid-cols-2 sm:grid-cols-1">
            <Card Features={Features} />
        </div>
    )
}

export default Features