import { Plus } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/Button';

import './styles.css';

export const metadata: Metadata = {
    title: 'Categories',
}

const categories = [
    {
        urlImagem: 'https://images.unsplash.com/photo-1562157873-818bc0726f68',
        name: 'Men Clothes',
        qtdItems: 24,
    },
    {
        urlImagem: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
        name: 'Women Clothes',
        qtdItems: 12,
    },
    {
        urlImagem: 'https://images.unsplash.com/3/www.madebyvadim.com.jpg',
        name: 'Accessories',
        qtdItems: 43,
    },
    {
        urlImagem: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475',
        name: 'Cotton Clothes',
        qtdItems: 31,
    },
    {
        urlImagem: 'https://images.unsplash.com/photo-1583261538022-26a857d8b8ba',
        name: 'Summer Clothes',
        qtdItems: 26,
    },
    {
        urlImagem: 'https://images.unsplash.com/photo-1489370603040-dc6c28a1d37a',
        name: 'Wedding Clothes',
        qtdItems: 52,
    },
    {
        urlImagem: 'https://images.unsplash.com/photo-1490036293550-29261601ccb9',
        name: 'Spring Collection',
        qtdItems: 24,
    },
    {
        urlImagem: 'https://images.unsplash.com/photo-1619216910014-1fdb7a8e98e9',
        name: 'Casual Clothes',
        qtdItems: 52,
    },
    {
        urlImagem: 'https://images.unsplash.com/photo-1572307480813-ceb0e59d8325',
        name: 'Hats',
        qtdItems: 26,
    },
];

export default function CategoriesPage() {
    return (
        <>
            <div className='header-admin'>
                <h5>Categories</h5>

                <div className='buttons-wrapper'>
                    <Button
                        type='button'
                        title='Add Category'
                        leftIcon={<Plus size={24} />}
                        buttonType='primary'
                        buttonSize='medium'
                    />
                </div>
            </div>

            <div className='categories'>
                {categories.map((categorie, index) => (
                    <Link key={index} className='category' href={`/categories/${index}`}>
                        <Image
                            src={categorie.urlImagem}
                            alt={categorie.name}
                            width={240}
                            height={240}
                        />

                        <div className='category-info'>
                            <span className='name'>{categorie.name}</span>

                            <span className='qtd-items'>{categorie.qtdItems} items</span>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
