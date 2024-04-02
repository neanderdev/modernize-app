'use client';

import { MoveLeft, MoveRight } from 'lucide-react';
import { useState } from 'react';

import { PaginationItem } from './PaginationItem';

import './styles.css';

interface PaginationProps {
    totalCountOfRegisters: number;
    registerPerPage?: number;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
    return [...new Array(to - from)]
        .map((_, index) => {
            return from + index + 1;
        })
        .filter(page => page > 0);
}

export function Pagination({
    totalCountOfRegisters,
    registerPerPage = 10
}: PaginationProps) {
    const [page, setPage] = useState(1);

    const lastPage = Math.ceil(totalCountOfRegisters / registerPerPage);

    const previousPages = page > 1
        ? generatePagesArray(page - 1 - siblingsCount, page - 1)
        : [];

    const nextPages = page < lastPage
        ? generatePagesArray(page, Math.min(page + siblingsCount, lastPage))
        : [];

    return (
        <div className='pagination-container'>
            <div className='pagination'>
                <button
                    type='button'
                    className='btn-move-left'
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                >
                    <MoveLeft size={24} />
                </button>

                {page > (1 + siblingsCount) && (
                    <>
                        <PaginationItem number={1} onPageChange={setPage} />

                        {page > (2 + siblingsCount) &&
                            <span className='more'>...</span>
                        }
                    </>
                )}

                {previousPages.length > 0 && previousPages.map(page => {
                    return <PaginationItem key={page} number={page} onPageChange={setPage} />
                })}

                <PaginationItem isCurrent number={page} onPageChange={setPage} />

                {nextPages.length > 0 && nextPages.map(page => {
                    return <PaginationItem key={page} number={page} onPageChange={setPage} />
                })}

                {(page + siblingsCount) < lastPage && (
                    <>
                        {(page + 1 + siblingsCount) < lastPage &&
                            <span className='more'>...</span>
                        }

                        <PaginationItem number={lastPage} onPageChange={setPage} />
                    </>
                )}

                <button
                    type='button'
                    className='btn-move-right'
                    onClick={() => setPage(page + 1)}
                    disabled={page === lastPage}
                >
                    <MoveRight size={24} />
                </button>
            </div>

            <span>{totalCountOfRegisters} Results</span>
        </div>
    );
}
