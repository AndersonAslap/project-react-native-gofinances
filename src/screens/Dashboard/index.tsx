import React from 'react';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionsCard, TransactionCardProps } from '../../components/TransactionsCard';

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionList
} from './styles';

const transactions: DataListProps[] = [
    {
        id: '1',
        type: 'positive',
        title: "Desenvolvimento de sites",
        amount: "R$ 12.000,00",
        category: { name: 'Vendas', icon: 'dollar-sign' },
        date: "13/04/2022"
    },
    {
        id: '2',
        type: 'negative',
        title: "ifood",
        amount: "R$ 120,00",
        category: { name: 'Alimentação', icon: 'coffee' },
        date: "13/04/2022"
    },
    {
        id: '3',
        type: 'negative',
        title: "Aluguel de apartamento",
        amount: "R$ 1200,00",
        category: { name: 'Casa', icon: 'shopping-bag' },
        date: "13/04/2022"
    }
];

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo
                            source={{ uri: 'https://github.com/AndersonAslap.png' }}
                        />
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Anderson</UserName>
                        </User>
                    </UserInfo>

                    <Icon name="power" />

                </UserWrapper>


            </Header>

            <HighlightCards>

                <HighlightCard
                    type="up"
                    title="Entradas"
                    amount="R$ 17.400,00"
                    lastTransaction="Última entrada dia 13 de abril"
                />

                <HighlightCard
                    type="down"
                    title="Saídas"
                    amount="R$ 1.259,00"
                    lastTransaction="Última saída dia 13 de abril"
                />

                <HighlightCard
                    type="total"
                    title="Total"
                    amount="R$ 16.141,00"
                    lastTransaction="Última entrada dia 13 de abril"
                />

            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>

                <TransactionList
                    data={transactions}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionsCard data={item} />}
                />

            </Transactions>

        </Container>
    )
}