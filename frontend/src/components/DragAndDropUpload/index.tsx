'use client';

import Image from 'next/image';
import { ChangeEvent, useState } from 'react';

import { Button } from '../Button';

import './styles.css';

interface DragAndDropUploadProps {
    fileSize: 'small' | 'medium' | 'large';
}

export function DragAndDropUpload({ fileSize }: DragAndDropUploadProps) {
    const [files, setFiles] = useState<{ name: string, src: string }[]>([]);

    function handleDragAndDropUpload(event: ChangeEvent<HTMLInputElement>) {
        if (event.target.files) {
            const urlFile = URL.createObjectURL(event.target.files[0]);
            const fileName = event.target.files[0].name;

            setFiles((oldFile) => [...oldFile, { name: fileName, src: urlFile }]);

            event.target.value = '';
        }
    }

    return (
        <>
            <span className='drag-and-drop-box'>
                <div className='drag-and-drop-box-cta'>
                    <Button
                        type='button'
                        buttonSize='medium'
                        buttonType='white'
                        title='Add File'
                    />

                    <span>Or drag and drop files</span>
                </div>

                <input
                    type='file'
                    id='upload-files'
                    name='upload-files'
                    onChange={(event) => handleDragAndDropUpload(event)}
                    autoComplete='off'
                />
            </span>

            <div className='files'>
                {
                    files.map((file, index) => (
                        <Image
                            key={index}
                            src={file.src}
                            alt={file.name}
                            className={`file ${fileSize}`}
                            width={fileSize === 'small' ? 8 : fileSize === 'medium' ? 12 : 16}
                            height={fileSize === 'small' ? 8 : fileSize === 'medium' ? 12 : 16}
                        />
                    ))
                }
            </div>
        </>
    );
}
