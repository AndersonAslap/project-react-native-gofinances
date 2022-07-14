import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionsCard } from '../../components/TransactionsCard';

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

const transactions = [
    {
        title: "Desenvolvimento de sites",
        amount: "R$ 12.000,00",
        category: { name: 'Vendas', icon: 'dollar-sign' },
        date: "13/04/2022"
    },
    {
        title: "Desenvolvimento de sites",
        amount: "R$ 12.000,00",
        category: { name: 'Vendas', icon: 'dollar-sign' },
        date: "13/04/2022"
    },
    {
        title: "Desenvolvimento de sites",
        amount: "R$ 12.000,00",
        category: { name: 'Vendas', icon: 'dollar-sign' },
        date: "13/04/2022"
    }
];

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
                    renderItem={({ item }) => <TransactionsCard data={item} />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: getBottomSpace()
                    }}
                />



            </Transactions>

        </Container>
    )
}