import React from 'react'
import HomepageCollectionsGridWrap from './style'
import CollectionTile from '../../CollectionTile'

export default function HomepageCollectionsGrid({collections}) {
    const dealsCollection = collections.find(collection => collection.title === "Deals")
    const standardCollections = collections.filter(collection => collection.title !== "Deals")

    return (
        <HomepageCollectionsGridWrap>
            {!!dealsCollection && (
                <CollectionTile 
                    title={dealsCollection.title}
                    description={dealsCollection.description}
                    image={dealsCollection.image}
                    destination={`/shop?c=${encodeURIComponent(dealsCollection.storefrontId)}`}
                />
            )}
            {standardCollections.map(collection => {
                return (
                    <CollectionTile 
                        title={collection.title}
                        description={collection.description}
                        image={collection.image}
                        key={collection.shopifyId} 
                        destination={`/shop?c=${encodeURIComponent(collection.storefrontId)}`}
                    />
                )
            })}
        </HomepageCollectionsGridWrap>
    )
}
