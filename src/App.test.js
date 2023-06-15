import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ActorList from './ActorList';
import ActorDetails from './actor_detail';

describe('ActorList component', () => {
  test('renders loading state correctly', () => {
    render(<ActorList />);
    const loadingElement = screen.getByText(/Loading.../i);
    expect(loadingElement).toBeInTheDocument();
  });

  test('renders error state correctly', () => {
    const errorMessage = 'Error occurred';
    render(<ActorList />);
    const errorElement = screen.getByText(`Error: ${errorMessage}`);
    expect(errorElement).toBeInTheDocument();
  });

  test('renders actor list correctly', () => {
    const actors = [
      { name: 'Actor 1', height: '170cm', birth_year: '1990' },
      { name: 'Actor 2', height: '180cm', birth_year: '1985' },
    ];
    render(<ActorList />);
    const actorElements = screen.getAllByTestId('actor-card');
    expect(actorElements).toHaveLength(actors.length);
  });

  test('displays actor details when detail button is clicked', () => {
    const actor = { name: 'Actor 1', height: '170cm', birth_year: '1990' };
    render(
      <>
        <ActorList />
        <ActorDetails actor={actor} />
      </>
    );

    const detailButton = screen.getByText('Detail');
    fireEvent.click(detailButton);

    const actorDetailsElement = screen.getByText('Actor Details');
    expect(actorDetailsElement).toBeInTheDocument();
  });
});

describe('ActorDetails component', () => {
  test('displays actor details correctly', () => {
    const actor = {
      name: 'Actor 1',
      height: '170cm',
      birth_year: '1990',
      hair_color: 'Black',
      eye_color: 'Brown',
      gender: 'Male',
      films: ['Film 1', 'Film 2'],
      vehicles: 'Vehicle 1',
    };
    render(<ActorDetails actor={actor} />);
    const actorNameElement = screen.getByText('Name: Actor 1');
    expect(actorNameElement).toBeInTheDocument();
    const heightElement = screen.getByText('Height: 170cm');
    expect(heightElement).toBeInTheDocument();
    const birthYearElement = screen.getByText('Birth Year: 1990');
    expect(birthYearElement).toBeInTheDocument();
    const hairColorElement = screen.getByText('Hair Color: Black');
    expect(hairColorElement).toBeInTheDocument();
    const eyeColorElement = screen.getByText('Eye Color: Brown');
    expect(eyeColorElement).toBeInTheDocument();
    const genderElement = screen.getByText('Gender: Male');
    expect(genderElement).toBeInTheDocument();
    const film1Element = screen.getByText('Film 1');
    expect(film1Element).toBeInTheDocument();
    const film2Element = screen.getByText('Film 2');
    expect(film2Element).toBeInTheDocument();
    const vehiclesElement = screen.getByText('Vehicles: Vehicle 1');
    expect(vehiclesElement).toBeInTheDocument();
  });
});
