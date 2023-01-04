import PropTypes from 'prop-types';

export default function Team({ team }) {
    const { name, role, image, desc } = team;
    return (
        <div className='flex flex-col space-y-4 pt-10 pb-5 px-5 bg-[rgb(32,42,60)] '>
            <p className='text-slate-300 text-start'>{desc}</p>
            <div className="flex space-x-2">
                <img src={image} alt="" className='w-8 h-8 rounded-full object-cover' />
                <div className="flex flex-col text-start text-[10px]">
                    <h1 className='font-bold'>{name}</h1>
                    <span className='text-slate-400'>{role}</span>
                </div>
            </div>
        </div>
    );
}



Team.propTypes = {
    team: PropTypes.object
};