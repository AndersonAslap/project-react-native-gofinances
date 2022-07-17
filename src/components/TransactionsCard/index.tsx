import React from 'react';

import {
    Container,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date,
    TransactionsTypeProps
} from './styles';

interface Category {
    name: string;
    icon: string;
}

export interface TransactionCardProps {
    type: TransactionsTypeProps;
    title: string;
    amount: string;
    category: Category;
    date: string;
}

interface Props {
    data: TransactionCardProps;
}

export function TransactionsCard({ data }: Props) {
    return (
        <Container>
            <Title>{data.title}</Title>

            <Amount type={data.type}>
                {String(data.type) === 'negative' && '- '}
                {data.amount}
            </Amount>

            <Footer>
                <Category>
                    <Icon name={data.category.icon} />
                    <CategoryName>{data.category.name}</CategoryName>
                </Category>

                <Date>{data.date}</Date>
            </Footer>
        </Container>
    )
}